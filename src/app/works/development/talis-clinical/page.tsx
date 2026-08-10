import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Talis Clinical LLC/Getinge",
    description: "Talis Clinical LLC is a medical software company I worked at for over 3 years, which was acquired by Getinge about a year after I began working there.",
};

export default function TalisClinical() {
    return (
        <main className="development-container container-fluid pt-6">
            <h1>Talis Clinical LLC/Getinge</h1>
            <p className="mb-4">
                Talis Clinical LLC is a medical software company based in Streetsboro, Ohio that was acquired by Getinge around a year
                after I began working for the company. We built applications for use by doctors and nurses at hospitals that helped
                them monitor patients from our applications and allowed them to do some of their chart work directly from their phone, 
                tablet, or computer.
            </p>
            <p className="mb-4">
                At Talis Clinical LLC, we had hardware created that all of the medical equipment is plugged into in order to transmit the vitals
                and other measurements to our databases for use within our applications. We built apps that doctors and nurses can open on their
                phones, tablets, or computers to see the vitals and other measurements in near real time with either graphs created using Amcharts
                or D3.js. Users of the application are also able to set up thresholds for each vitals so if the vitals go above or below the threshold
                they set, they will receive and email and/or a text message so they are informed right away of changes.
            </p>

            <section className="rounded-box d-block">
                <h2>L&D Application</h2>
                <p className="mb-4">
                    The labor and delivery app was built with near real time data on vitals for the baby and mother displayed on a graph. The
                    application also allows doctors and nurses to document medications given and information regarding the baby after it has
                    been born.
                </p>
                <p className="mb-4">
                    This application also allows doctors and nurses to do some of their charting when they give baby or mother medication and to record
                    information about baby (or babies) born, gender, size/weight, number of babies, etc.
                </p>
                <p className="mb-4">
                    This application was built using Knockout.js, jQuery, Bootstrap 5.0, and Sass compiled into CSS.
                </p>

                <h2>RemoteView Application</h2>
                <div className="float-right w-5/12 pr-4">
                    <Link href="/images/development/talis-clinical/remote-view-mobile03.png" target="_blank">
                        <Image
                            src="/images/development/talis-clinical/remote-view-mobile03.png"
                            alt="RemoteView Application"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p className="mb-4">
                    This is an application used in ORs to track patient data and present vitals at the top of the page on all devices. This application
                    is very versatile and has multiple permission levels for different medical staff. The vitals and medical information is displayed in
                    near real time on the application within the hospital so staff are able to check patient vitals remotely very quickly. There is also
                    a feature that allows medical staff to see thresholds for each vital being tracked so if the vital goes outside of the range set by
                    the staff member, they will be able to recieve an email or a text message based on their selections.
                </p>

                <h2>Anesthesia Portal</h2>
                <div className="float-left w-5/12 pr-4">
                    <Link href="/images/development/talis-clinical/anesthesia-portal01.jpg" target="_blank">
                        <Image
                            src="/images/development/talis-clinical/anesthesia-portal01.jpg"
                            alt="Anesthesia Portal"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p className="mb-4">
                    This is an application used to document information patients give hospital staff when they are going to be put under Anesthesia
                    for various procedures. It includes questions about the patient, medications being taken, past surgery or health related events,
                    blocks given to patients during procedures, and more.
                </p>
                <p className="mb-4">
                    This application is built using Knockout.js, jQuery, Bootstrap 3.0, and vanilla CSS. It has been evolving over a long time period
                    so it contains many different functions and abilities.
                </p>

                <h2>ECMO Application</h2>
                <div className="float-right w-5/12 pr-4">
                    <Link href="/images/development/talis-clinical/ecmo-mobile01.png" target="_blank">
                        <Image
                            src="/images/development/talis-clinical/ecmo-mobile01.png"
                            alt="ECMO Application"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p className="mb-4">
                    This application was built to make data tracked by ECMO carts on patients in the ICU easy to monitor by doctors or nurses in charge
                    of specific patients. This application also has utilities for tracking all of the medical equipment used on the ECMO carts so staff
                    is able to keep track of the hardware that will be used for each individual patient.
                </p>
            </section>
        </main>
    );
}
