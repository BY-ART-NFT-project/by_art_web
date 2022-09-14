// //리액트 쿼리 사용 시
// export function getNFT() {
//   return fetch(
//     `https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`
//   ).then((response) => response.json());
// }

// //서버 사이드 고정 함수
// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`)
//   ).json();
//   return {
//     props: { results },
//   };
// }

// const options = { method: "GET" };

// fetch(`https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`, options)
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.error(err));
