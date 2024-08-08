export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="flex basis-0 bg-gray-900">
            <div className="container ml-auto mr-auto pt-6 pb-6">
                <p className="copyright">&copy; {year} Kristina L. Hall</p>
            </div>
        </footer>
    );
};
