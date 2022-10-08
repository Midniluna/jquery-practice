const moviesArr = [];
let moviePosition = 0;

$("form").on("submit", function (e) {
	e.preventDefault();
	let nameVal = $("#movie-name").val();
	let ratingVal = $("#movie-rating").val();
	if (nameVal === "") {
		return;
	}
	let movieData = { nameVal, ratingVal, moviePosition };
	moviesArr.push(movieData);
	$("tbody").append(submitNewMovie(movieData));
	moviePosition++;

	$("form").trigger("reset");
});

$("tbody").on("click", ".delete-this", function (e) {
	let removalIndex = moviesArr.findIndex(function (movie) {
		movie.moviePosition === +$(e.target).attr("id");
	});
	moviesArr.splice(removalIndex, 1);
	$(e.target).closest("tr").remove();
});

function submitNewMovie(data) {
	return `
    <tr>
      <td>Title: ${data.nameVal}</td>
      <td>Rating: ${data.ratingVal}</td>
      <td>
        <button class="delete-this" id=${data.moviePosition}>
          Delete
        </button>
      </td>
    <tr>`;
}
