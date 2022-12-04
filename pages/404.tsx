import Link from "next/link";

export default function Error() {
  return (
    <>
      <section>
        <div>
          <h2>This page is not accessible!</h2>
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div>
      </section>

      <style jsx>{`
        a {
          color: red;
          font-size: 16px;
          display: block;
        }
        section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height : var(--app-height, 100vh);
          flex-wrap: wrap;
          text-align: center;
        }
        h2 {
          font-size: 30px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
