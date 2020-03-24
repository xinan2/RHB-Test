import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { REPO_LIST_FETCH } from '../../store/constant';
import ReactPaginate from 'react-paginate';

import ListResult from './ListResult';

import './css/home.css';

const Home = () => {
	const dispatch = useDispatch();
	const [pageNum, setPageNum] = useState(0);
	const [query, setQuery] = useState('');
	const list = useSelector(state => state.repoList)

	const fetchRepo = (e) => {
		if (e.key == "Enter") {
			setPageNum(0)
			setQuery(e.target.value)
			dispatch({
				type: REPO_LIST_FETCH,
				data: {
					page: 1,
					query: e.target.value
				}
			})
		}
	}

	const renderList = () => {
		if (list.loading) {
			return <div className="loading">
				<FontAwesomeIcon icon={faSpinner} spin size="lg" />
			</div>
		}

		if (list.totalCount === 0) {
			return <p>We couldn’t find any repositories matching your search query</p>
		}

		return list.repoItem.map((data) => <ListResult key={data.id} item={data} />)
	}

	const changePage = (e) => {
		setPageNum(e.selected)
		dispatch({
			type: REPO_LIST_FETCH,
			data: {
				page: e.selected + 1,
				query: query
			}
		})
	}

	return (
		<div className="container">
			<div className="gitContainer">
				<p className="title">Github Search</p>
				<div className="searchContainer">
					<div className="inputContainer">
						<input type="text" className="inputStyle" onKeyPress={(e) => fetchRepo(e)} placeholder="Type Query and Enter to search"/>
						<FontAwesomeIcon icon={faSearch} className="iconStyle" />
					</div>
					{list.totalCount != null && <h3 className="totalResult">{list.totalCount} repository results</h3>}
					{renderList()}
					{((list.totalCount) || (!list.totalCount && list.totalCount === 0)) &&
						<div className="react-paginate">
							<ReactPaginate
								previousLabel={'<'}
								nextLabel={'>'}
								breakLabel={'...'}
								breakClassName={'break-me'}
								pageCount={list.totalCount / 10}
								marginPagesDisplayed={2}
								pageRangeDisplayed={5}
								onPageChange={(e) => changePage(e)}
								containerClassName={'pagination'}
								subContainerClassName={'pages pagination'}
								activeClassName={'active'}
								forcePage={pageNum}
							/>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default Home;
