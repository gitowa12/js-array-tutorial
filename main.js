const articles = [
  { title: "aaa", cat: "html" },
  { title: "bbb", cat: "css" },
  { title: "ccc", cat: "html" },
  { title: "ddd", cat: "js" },
];

//filterとfind 配列から指定の条件で要素を取得するメソッド

//filter 条件に一致する（true）のものを配列にして返す
const htmlArticles = articles.filter((article) => {
  return article.cat === "html";
});
console.log(htmlArticles);

//find 条件に一致する（true）のもので最初のものを返す
const htmlArticle = articles.find((article) => {
  return article.cat === "html";
});
console.log(htmlArticle);

//some 配列内に条件に一致する要素があるかどうか、返り値はboolean値。条件分岐などでよく使う
const htmlFlg = articles.some((article) => {
  return article.cat === "html";
});
console.log(htmlFlg);

//every 配列内の要素全てが条件に一致するかどうか、返り値はboolean
const htmlFlgs = articles.every((article) => {
  return article.cat === "html";
});
console.log(htmlFlgs);

//includes 配列の要素がオブジェクトの場合には使えない。ただの配列用に使う
const arr = ["aaa", "bbb", "ccc"];
const result = arr.includes("aaa");
console.log(result);

//mapは処理結果を配列にして返す
const titleList = articles.map((article) => {
  return article.title;
});
console.log(titleList);

//forEachには返り値がない。処理を繰り返し実行するだけ
const titles = articles.forEach((article) => {
  return article.title;
});
console.log(titles);

const counts = articles.reduce((acc, article) => {
  const cat = article.cat;
  console.log(cat);
  if (acc[cat] === undefined) {
    acc[cat] = 1;
  } else {
    acc[cat]++;
  }
  return acc;
}, {});
console.log(counts);
