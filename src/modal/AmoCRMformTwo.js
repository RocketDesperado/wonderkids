import React, { useEffect, useRef } from 'react';
import './AmoCRMformTwo.css';

const AmoCRMformTwo = ({ open }) => {
    const formContainerRef = useRef(null);

    useEffect(() => {
        if (!open) {
            if (formContainerRef.current) {
                formContainerRef.current.innerHTML = ''; // Clear the container to force reinitialization
            }
            return;
        }

        // Append a timestamp to force reload
        const timestamp = new Date().getTime();

        const script = document.createElement('script');
        script.async = true;
        script.charset = 'utf-8';
        script.id = 'amoforms_script_1403446';
        script.src = `https://forms.amocrm.ru/forms/assets/js/amoforms.js?${timestamp}`;

        const inlineScript = document.createElement('script');
        inlineScript.text = `
            !function(a,m,o,c,r,m){
                a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
                a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
                a[o+r]({id:"1403446",hash:"657e8d00c701833b9d1e1592ed935bea",locale:"ru"}),
                a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
            }(window,0,"amo_forms_","params","load","loaded");
        `;

        formContainerRef.current.appendChild(script);
        formContainerRef.current.appendChild(inlineScript);

        return () => {
            script.remove();
            inlineScript.remove();
        };
    }, [open]);

    return (
        <div ref={formContainerRef} id="amocrm-form-container-two" style={{ display: open ? 'block' : 'none' }}></div>
    );
};

export default AmoCRMformTwo;
