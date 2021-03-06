import Arkham from "../../core/arkham";
import $ from "jquery";

export default {
  fetch: (url) => {
    return $.ajax({
      url: url
    }).error((results) => {
      let error = {
        message: "There was an error fetching " + url,
        type: results.status
      };
      Arkham.trigger("place.errorfetching", error);
    });
  } 
};
