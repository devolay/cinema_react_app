import * as Styles from "./MoviesPage.styles";
import * as SharedStyles from "shared/styles";
import RoomBar from "components/RoomBar";
import MovieCard from "components/MovieCard";
import services from "store/services";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "store";
import { useEffect } from "react";

const MoviesPage = () => {
  const pageAmount = useSelector(services.selectors.movies.selectPagesAmount);
  const selectedPage = useSelector(services.selectors.movies.selectCurrentPage);
  const movies = useSelector(services.selectors.movies.selectMovies);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(services.actions.movies.getMovies({ page: selectedPage }));
  }, [selectedPage, dispatch]);

  const onPageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    dispatch(services.actions.movies.setCurrentPage(page));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <SharedStyles.Container>
      <RoomBar></RoomBar>
      <Styles.Cards>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Styles.Cards>
      <Styles.Pages count={pageAmount} page={selectedPage} onChange={onPageChange} />
    </SharedStyles.Container>
  );
};

export default MoviesPage;
