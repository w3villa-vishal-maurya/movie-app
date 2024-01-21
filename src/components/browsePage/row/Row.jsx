import React, { useEffect, useState } from "react";
import { HTTP } from "../../../api/axios";
import { BASE_IMAGE_URL } from "../../../constants/url";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './row.scss';

function Row({ rowId, category, type, url }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = (await HTTP.get(url)).data.results;
			setMovies(request);
		}

		fetchData();
	}, [url]);

	const slideLeft = () => {
		let slider = document.getElementById("slider" + rowId);
		let viewportWidth = window.innerWidth;

		if (rowId === 1) {
			slider.scrollLeft = slider.scrollLeft + viewportWidth;
		} else {
			slider.scrollLeft = slider.scrollLeft + viewportWidth;
		}
	};

	const slideRight = () => {
		let slider = document.getElementById("slider" + rowId);
		let viewportWidth = window.innerWidth;

		if (rowId === 1) {
			slider.scrollLeft = slider.scrollLeft - viewportWidth;
		} else {
			slider.scrollLeft = slider.scrollLeft - viewportWidth;
		}
	};

	return (
		<>
			<h3 style={{ marginTop: "10px" }}>{category}</h3>
			<div className="moviesContainer d-flex" id={"slider" + rowId}>
				<div
					className='arrow-container-left'
					onClick={slideRight}
				>
					<BsChevronLeft />
				</div>
				{movies.map(
					(movie) => ( movie?.poster_path) && (
						<div
							key={movie.id}
							className={`posterContainer`}
							// onClick={() => handleFeatureModal(movie)}
						>
							<img
								className= "posterLarge"
								src={`${BASE_IMAGE_URL}${movie?.poster_path}`}
								alt={
									movie?.title ||
									movie?.name ||
									movie?.original_title
								}
							/>
						</div>
					)
				)}
				<div
					className= 'arrow-container-right'
					onClick={slideLeft}
				>
					<BsChevronRight />
				</div>
			</div>
		</>
	);
}

export default Row;
