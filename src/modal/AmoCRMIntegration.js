import React, { useEffect } from 'react';

const AmoCRMIntegration = () => {
    useEffect(() => {
        // Create the first script element
        const script1 = document.createElement('script');
        script1.innerHTML = `
            !function(a,m,o,c,r,m){
                a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
                a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
                a[o+r]({id:"1403126",hash:"ead69f6fc71ad97623b3c28bf9d62efc",locale:"ru"}),
                a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
            }(window,0,"amo_forms_","params","load","loaded");
        `;
        document.body.appendChild(script1);

        // Create the second script element
        const script2 = document.createElement('script');
        script2.id = 'amoforms_script_1403126';
        script2.async = true;
        script2.charset = 'utf-8';
        script2.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1725404694';
        document.body.appendChild(script2);

        // Clean up function to remove the scripts when the component unmounts
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

    return null; // This component does not render anything
};

export default AmoCRMIntegration;
