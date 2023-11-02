const Layout = ({children}) => (
    <main role="main">
        {children}
    </main>
)

export default page => <Layout>{page}</Layout>;