const json = require("./2020-01-02");

export const postData = () => {
  let posts = [];

  for (let x = 2; x <= 10; x++) {
    posts.push({
      title: `${json[x]["attachments"][0]["title"]}`,
      imgSrc: `${json[x]["attachments"][0]["image_url"]}`,
      href: `${json[x]["attachments"][0]["title_link"]}`,
      text: `${json[x]["attachments"][0]["text"]}`,
    });
  }

  return posts;
};
