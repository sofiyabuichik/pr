import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function SearchSection({setSearchString, selector, name, searchString, path}) {
	const {data = [], isLoading} = selector(searchString)

	console.log(selector)
	if (isLoading) return (
		<div className="spinner-border" role="status">
			<span className="sr-only"></span>
		</div>
	)

	return (
		<div className={"search-section"}>
			<h4>{name}</h4>
			{
				data.length > 0
					? data.map(el => <Link onClick={() => setSearchString('')} to={path ? `/${path}#${el.id}` : "#"}>{el.name}</Link>)
					: <p>Ничего не найдено</p>
			}
		</div>
	);
}

export default SearchSection;