import axios from "axios";

    const fetchShow = async () => {
      const res = await axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes");
      // setShow(res.data);
      // setSeasons(formatSeasons(res.data._embedded.episodes));
      return res;
    };

export default fetchShow