exports.getDate = function(){

const Option = {
    weekday : 'long',
    month : 'long',
    day : 'numeric',
    year : 'numeric'
}
const today = new Date();
return  today.toLocaleDateString("en-US", Option);

}

exports.getDay = function(){


    const Option = {
        weekday : 'long',
    }
    const today = new Date();
    return  today.toLocaleDateString("en-US", Option);
    
    }

 