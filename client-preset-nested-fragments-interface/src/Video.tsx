import { FragmentType, useFragment } from "./gql/fragment-masking";
import { graphql } from "./gql/gql";

const Film = (props: { film: FragmentType<typeof FilmFragment> }) => {
  const film = useFragment(FilmFragment, props.film);
  return (
    <div>
      <h3>{film.title}</h3>
      <p>{film.releaseDate}</p>
    </div>
  );
};

export default Film;