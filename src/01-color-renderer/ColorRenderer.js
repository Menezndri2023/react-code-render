import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'

},
{
  hex: '#000',
  name: 'Tart black'

},
{
  hex: '#AF4378',
  name: 'Tart endigo'

}
]

export default function ColorRenderer () {
  return (
    <div >
     {colors.map((color)=>{

      return <Color key={color.name} name={color.name} hex={color.hex}/>
     })}
    </div>
  )
}
