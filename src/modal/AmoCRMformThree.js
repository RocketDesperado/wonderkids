import React, { useEffect, useRef } from 'react';
import './AmoCRMformTwo.css';
import './AmoCRMformThree.css';

const AmoCRMformThree = ({ open }) => {
    const formContainerRef = useRef(null);

    const handleError = (error) => {
        console.error('Script error:', error);
    };

    useEffect(() => {
        if (!open) {
            if (formContainerRef.current) {
                formContainerRef.current.innerHTML = '';
            }
            return;
        }

        const timestamp = new Date().getTime();

        // Function to load the script with delay
        const loadScripts = () => {
            // Create and append external script
            const script = document.createElement('script');
            script.async = true;
            script.charset = 'utf-8';
            script.id = 'amoforms_script_1406034';
            script.src = `https://forms.amocrm.ru/forms/assets/js/amoforms.js?${timestamp}`;
            script.onerror = handleError;

            // Create and append inline script
            const inlineScript = document.createElement('script');
            inlineScript.text = `
                try {
                    !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1406034",hash:"18e75b14d88d4a607d975efabf5a7160",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
                    }(window,0,"amo_forms_","params","load","loaded");
                } catch (err) {
                    console.error('Inline afk script error:', err);
                }
            `;
            inlineScript.onerror = handleError;

            if (formContainerRef.current) {
                formContainerRef.current.appendChild(script);
                script.onload = () => {
                    console.log('External script loaded');
                    formContainerRef.current.appendChild(inlineScript);
                };
            }
        };

        // Set timeout to delay script loading
        const timer = setTimeout(() => {
            loadScripts();
        }, 100); // Delay of 2 seconds

        return () => {
            clearTimeout(timer); // Clean up the timer on unmount
            if (formContainerRef.current) {
                formContainerRef.current.innerHTML = ''; // Clean up both scripts
            }
        };
    }, [open]);

    return (
        <div ref={formContainerRef} id="amocrm-form-container-two" style={{ display: open ? 'block' : 'none' }}></div>
    );
};

export default AmoCRMformThree;
