export const metadata = {
  title : "instagram marketing"
}
export default function RootLayout({ children }) {
  return (
    <>
        <header style={{background:"yellow "}}>this is header for marketing</header>
        {children}
        <footer style={{background:"blue"}}>this is header for marketing</footer>

    </>
  );
}