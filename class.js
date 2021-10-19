(() =>{

    class Accordion {

        //初期化
        constructor(obj){

            console.log('obj',obj.hookName);
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            let index = 0;
            while(index < triggerLen){
                $trigger[index].addEventListener('click',(e) => this.clickHandler(e));
                index++;
            }
        }

        //クリック時の処理
        clickHandler(e){
             e.preventDefault();

             const $target = e.currentTarget;
             const $content = $target.nextElementSibling;

             if($content.style.display === 'block'){
             $content.style.display = 'none';
             }else{
             $content.style.display = 'block';
            }
        };
    }

    const fuckingAccordion = new Accordion({
        hookName:'#js-faq',
        tagName:'p'
    });
    

    
    

})();

btn.addEventListener('click',function() {
    //click
    let newwin=window.open('file:///C:/Users/0975/Desktop/11%E6%9C%88%E5%88%86%E5%80%AB%E7%90%86%E7%A0%94%E4%BF%AE/source%20document/document.html');
});