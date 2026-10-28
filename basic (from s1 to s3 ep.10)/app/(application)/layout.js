export const metadata = {
  title : "instagram marketing"
}
export default function RootLayout({ children }) {
  return (
    <>
        <header style={{background:"teal"}}>this is header of application</header>
        {children}
        <footer style={{background:"brown"}}>this is header of application</footer>

    </>
  );
}