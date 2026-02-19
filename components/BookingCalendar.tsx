import React, { useEffect } from 'react';

// Declare Cal global
declare global {
    interface Window {
        Cal?: any;
    }
}

const BookingCalendar: React.FC = () => {
    const CAL_NAMESPACE = "project-consultation-15-minutes";
    const CAL_LINK = "redlegcg/project-consultation-15-minutes";

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();

            // Initialize the namespace specifically
            cal("ns", {
                [CAL_NAMESPACE]: {
                    theme: "dark",
                    styles: { branding: { brandColor: "#000000" } },
                    hideEventTypeDetails: false,
                    layout: "month_view"
                }
            });

            // Render the inline embed
            cal("inline", {
                elementOrSelector: "#my-cal-inline",
                calLink: CAL_LINK,
                layout: "month_view",
                config: {
                    layout: "month_view",
                    theme: "dark"
                }
            });

            // Additional UI config for the global instance as fallback/reinforcement
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    // Manual Cal API Loader
    const getCalApi = (): Promise<any> => {
        return new Promise((resolve) => {
            if (window.Cal) {
                resolve(window.Cal);
                return;
            }
            (function (C, A, L) {
                let p = function (a: any, ar: any) {
                    a.q.push(ar);
                };
                let d = C.document;
                C.Cal =
                    C.Cal ||
                    function () {
                        let cal = C.Cal;
                        let ar = arguments;
                        if (!cal.loaded) {
                            cal.ns = {};
                            cal.q = cal.q || [];
                            d.head.appendChild(d.createElement("script")).src = A;
                            cal.loaded = true;
                        }
                        if (ar[0] === "init") {
                            const api = function () {
                                p(api, arguments);
                            };
                            const ns = ar[1];
                            api.q = api.q || [];
                            if (typeof ns === "string") {
                                cal.ns[ns] = Cal.ns[ns] || api;
                                p(cal.ns[ns], ar);
                                p(cal, ["initNs", ns]);
                            } else p(cal, ar);
                            return;
                        }
                        p(cal, ar);
                    };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            if (window.Cal) {
                window.Cal("init", { origin: "https://cal.com" });
                resolve(window.Cal);
            }
        });
    };

    return (
        <section id="booking-section" className="py-24 px-6 relative border-t border-white/5 bg-black">
            <div className="max-w-[1100px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Book a 15-Minute Call
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Choose a time that works for you.
                    </p>
                </div>

                {/* Calendar Card */}
                <div className="w-full bg-[#0A0A0A] rounded-[16px] border border-white/5 shadow-2xl overflow-hidden p-1">
                    <div
                        id="my-cal-inline"
                        className="w-full h-full min-h-[650px] md:min-h-[720px] overflow-visible"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default BookingCalendar;
