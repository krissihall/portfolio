import type { Metadata } from "next";
import Image from "next/image";
import "@/app/assets/scss/pages/development.scss";

export const metadata: Metadata = {
    title: "Brunner Development Projects",
    description: "",
};

export default function BrunnerProjects() {
    return (
        <main className="development-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Brunner</h1>
            <p className="mb-4">
                This is an advertising agency I worked at for three an a half years with various types of projects and many different
                clients.
            </p>

            <section className="rounded-box d-block">
                <h2>Bob Evans Mashtini Microsite</h2>
                <div className="float-right w-5/12 pl-4">
                    <Image
                        src="/images/development/brunner/mashtini.png"
                        alt="Mashtini Microsite"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This was a very fun microsite made for the Bob Evans client to celebrate being voted as the Best Mashed Potatoes
                    in the US the year this was complete. This microsite feature different recipes that could be made with mashed
                    potatoes and served in fancy martini glasses. This microsite was full responsive and available to be viewed on
                    all available devices.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 10 }, (_, i) => (
                        <div id={`mash${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/mashtini/${i + 1}.jpg`}
                                alt="Mashtini"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 10 }, (_, i) => (
                        <a href={`#mash${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>

                <h2>Huffy Mickey &amp; Minnie Cruisers Microsite</h2>
                <div className="float-left w-5/12 pr-4">
                    <Image
                        src="/images/development/brunner/mickeyminnie.png"
                        alt="Mickey & Minnie Cruisers Microsite"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This microsite was created as a fun, interactive experience for a Limited Time Mickey and Minnie Mouse Cruiser bike
                    series that was released by Huffy. The microsite was designed to look like an old black & white cartoon and had fancy
                    transitions between pages and small animations on the different characters. This microsite was fully responsive so
                    users could view it on any device.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 11 }, (_, i) => (
                        <div id={`mickey${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/mickeyminnie/${i + 1}.jpg`}
                                alt="Mashtini"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 11 }, (_, i) => (
                        <a href={`#mickey${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>

                <h2>Huffy Hometown Cruiser Google Street View Feature</h2>
                <div className="float-right w-5/12 pl-4">
                    <Image
                        src="/images/development/brunner/hometowncruiser.png"
                        alt="Hometown Cruiser Microsite"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This was a fun microsite created for Huffy Bicycles using Google Streetview where we overlaid bicycle handlebars
                    over the streetview window so users can ride around their hometown by putting in an address. There were also several
                    interesting places with beautiful views pre-selected so users can check out new places.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 5 }, (_, i) => (
                        <div id={`cruiser${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/hometowncruiser/${i + 1}.jpg`}
                                alt="Hometown Cruiser"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 5 }, (_, i) => (
                        <a href={`#cruiser${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>

                <h2>Wise Snacks Cheezdoodle Mountain Microsite</h2>
                <div className="float-left w-5/12 pr-4">
                    <Image
                        src="/images/development/brunner/cheezdoodles.png"
                        alt="Cheezdoodles"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This was a very fun microsite built for Wise Snacks Cheezdoodles and was full of fun animations,
                    interactive features such as a doodle pad, and information regarding the Cheezdoodles products.
                    This was built when HTML5 was first becoming popular so certain features were build first with
                    Flash and then with Canvas such as the doodle pad. There were also controls set so pictures drawn
                    could be approved prior to appearing on the microsite.
                </p>
                <div className="carousel carousel-vertical rounded-box w-full h-96 mb-4">
                    <div className="carousel-item w-full">
                        <Image
                            src="/images/development/brunner/cheezdoodles/01.jpg"
                            alt="Cheezdoodles"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <h2>Cub Cadet Test Drive Experience Microsite</h2>
                <div className="float-right w-5/12 pl-4">
                    <Image
                        src="/images/development/brunner/cubcadet.png"
                        alt="Cub Cadet Test Drive Experience Microsite"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This microsite was created for their traveling Test Drive Experience that traveled the country and
                    gave customers the opportunity to test drive various Cub Cadet tractors prior to purchase. This
                    microsite had information about the models of tractor available to test drive and links for locations
                    where they are available for purchase. There is integration with Google Maps to show times and locations
                    for the different test drive experiences so customers know where and when to go. This is a fully responsive
                    website so was available to view on all devices.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 11 }, (_, i) => (
                        <div id={`cubcadet${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/cubcadet/${i + 1}.jpg`}
                                alt="Cub Cadet Test Drive Experience Microsite"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 11 }, (_, i) => (
                        <a href={`#cubcadet${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>

                <h2>Wise Snacks Website</h2>
                <div className="float-left w-5/12 pr-4">
                    <Image
                        src="/images/development/brunner/wise.png"
                        alt="Wise Snacks"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This website was built using the Umbraco Content Management System, which is a asp.NET C# based CMS. It was
                    created using CSS, and jQuery and had information on all of the product line for Wise Snacks. It had links
                    to social media, recipes, and a blog.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 7 }, (_, i) => (
                        <div id={`wise${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/wise/${i + 1}.jpg`}
                                alt="Wise Snacks"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 7 }, (_, i) => (
                        <a href={`#wise${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>

                <h2>Sensodyne International Websites</h2>
                <div className="float-right w-5/12 pl-4">
                    <Image
                        src="/images/development/brunner/sensodyne.png"
                        alt="Sensodyne"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This website was built using the Umbraco Content Management System, which is based on asp.NET using C#. This
                    website had 55 different websites internationally, several of them featuring multiple languages that users
                    were able to switch between. There were several add-on features that I helped create and implement such as the
                    Ask a Dentist feature, which allowed users to select various questions and a video would be played to give the
                    user their answer. There was also a responsive site upgrade that could be purchased and implemented on a per-site
                    basis.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 7 }, (_, i) => (
                        <div id={`sensodyne${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/sensodyne/${i + 1}.jpg`}
                                alt="Sensodyne"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 7 }, (_, i) => (
                        <a href={`#sensodyne${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>

                <h2>Luckyleaf Website</h2>
                <div className="float-left w-5/12 pr-4">
                    <Image
                        src="/images/development/brunner/luckyleaf.png"
                        alt="Luckyleaf"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This website was built using CSS/LESS, HTML, and jQuery and features a recipe database as well as
                    product information, and a blog. The homepage was redesigned several times until the client fell
                    in love with the look and feel of it. The recipe database was searchable using a variety of criteria
                    including product used, occasion, and dessert type.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 6 }, (_, i) => (
                        <div id={`luckyleaf${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/luckyleaf/${i + 1}.jpg`}
                                alt="Luckyleaf"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 6 }, (_, i) => (
                        <a href={`#luckyleaf${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>

                <h2>Atria's Oktoberfest Microsite</h2>
                <div className="float-right w-5/12 pl-4">
                    <Image
                        src="/images/development/brunner/oktoberfest.png"
                        alt="Atria's Oktoberfest"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    Atria's is a restaurant and this Oktoberfest microsite was a fun site to celebrate Oktoberfest.
                    This microsite featured a series of Steins with German writing on them that is then translated
                    into English with links to coupons for use in the restaurants. The steins rotate around as the
                    user clicks the arrows and contains information about the restaurant including the menu, parties
                    & catering, locations, and information about the history of the restaurant.
                </p>
                
                <div className="carousel rounded-box gap-3">
                    {Array.from({ length: 6 }, (_, i) => (
                        <div id={`oktoberfest${i}`} className="carousel-item w-full" key={i}>
                            <Image
                                src={`/images/development/brunner/oktoberfest/${i + 1}.jpg`}
                                alt="Atria's Oktoberfest"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {Array.from({ length: 6 }, (_, i) => (
                        <a href={`#oktoberfest${i}`} className="btn btn-xs" key={i}>{i + 1}</a>
                    ))}
                </div>
            </section>
        </main>
    );
}
