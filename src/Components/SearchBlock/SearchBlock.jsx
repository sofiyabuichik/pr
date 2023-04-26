import React from 'react';
import SearchSection from "./SearchSection";

function SearchBlock({
											 setSearchString,
											 searchValue = '',
											 querySelectorsArray = [{name: "", path: "/", selector: function a () {}}]})
{



	return (
		<div className={"search-block"}>
			{
				querySelectorsArray.map(({name, selector, path}) =>
					<SearchSection
						path={path}
						setSearchString={setSearchString}
						searchString={searchValue}
						selector={selector}
						name={name || "none"}
					/>)
			}
		</div>
	);
}

export default SearchBlock;