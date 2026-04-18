export interface ReactContainer {
    children: React.ReactNode
}
const Container = ({ children }: ReactContainer) => {
    return (
        <section className="container mx-auto px-8">
            {children}
        </section>
    )
};
export default Container;