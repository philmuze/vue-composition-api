import fetch from "node-fetch";

const data = fetch(
  "https://api.meetup.com/vue-js-dresden/events/267996287/rsvps?&sign=true&photo-host=public"
)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res[0]; //?
  });

//?
