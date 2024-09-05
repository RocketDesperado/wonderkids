import { useEffect, useRef } from 'react';

const AmoCRMformOne = () => {
    const formContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.charset = 'utf-8';
        script.id = 'amoforms_script_1403522';
        script.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1725530978';

        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `
        !function(a,m,o,c,r,m){
            a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
            a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
            a[o+r]({id:"1403522",hash:"e31e06a096fc7b0a4251df3443d69ada",locale:"ru"}),
            a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
        }(window,0,"amo_forms_","params","load","loaded");
    `;

        formContainerRef.current.appendChild(inlineScript);
        formContainerRef.current.appendChild(script);

        return () => {
            if (formContainerRef.current) { // Check if the reference still exists
                if (formContainerRef.current.contains(inlineScript)) {
                    formContainerRef.current.removeChild(inlineScript);
                }
                if (formContainerRef.current.contains(script)) {
                    formContainerRef.current.removeChild(script);
                }
            }
        };
    }, []);

    return <div ref={formContainerRef} id="amocrm-form-container"></div>; // Target for form injection
};

export default AmoCRMformOne;
