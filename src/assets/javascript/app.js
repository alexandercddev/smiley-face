let width = window.innerWidth;
let height = window.innerHeight;
const body = document.getElementById('app');

window.addEventListener("resize", ({target: {innerWidth, innerHeight}}) => {
    width = innerWidth;
    height = innerHeight;
    smiley({width, height});
});

const smiley = ({width, height}) => { 
    const cols = parseInt(width / 152);
    const rows = parseInt(height / 152);
    const numberSmiley = cols * rows;
    let label = ``;
    for(let i = 1; i <= numberSmiley; i++){
        const color = i % 2 ? 'green' : 'pink';
        label = `${label}
        <label class="smile-${color}">
            <input type="radio" name="smile-${color}">
            <div class="face"></div>
        </label>
        `;
    }
    body.innerHTML =  label;
    console.log('Smiley ', numberSmiley)
}

smiley({width, height});