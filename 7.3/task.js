window.addEventListener('DOMContentLoaded', ()=>{

    const tabWrap = document.querySelector('.tab__navigation')
    let tabs = Array.from(document.querySelectorAll('.tab'))
    let tabContent = Array.from(document.querySelectorAll('.tab__content'))

    function hideTabs(n) {

        for (let i = n; i< tabContent.length; i++){
            tabContent[i].classList.add('tab__content_active')
            tabContent[i].classList.remove('tab__content_active')
            console.log(tabContent[i])
        };
    };

    function showTabs(n) {

        if (tabContent[n].classList.contains('tab__content')) {
            tabContent[n].classList.remove('tab__content_active')
            tabContent[n].classList.add('tab__content_active')
        };
    };

    hideTabs(1)

    tabWrap.addEventListener('click', (e)=>{

        let target = e.target

        if (target && target.classList.contains('tab')){
            
            for (let i = 0; i < tabs.length; i++){
                if (target == tabs[i]){
                    hideTabs(0)
                    showTabs(i)
                    break
                };
            };
        };
    });
});