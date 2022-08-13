import React from 'react';
import PropTypes from 'prop-types';
const  Profil=(props)=>  {
   
    const handleName=()=>{alert(props.fullName)};
      return (
        <div className='trg'>
           <span onMouseMove={handleName}>{props.children}</span>
          <div className='trg1'>
          <h2>{props.fullName}</h2>  
          <h4>{props.profession}</h4>  
          <p>{props.bio}</p>
          </div>
        </div>
      )
           
  }

Profil.defaultProps = {
    bio: "Pouvez-vous vous présenter en quelques mots ? Je m’appelle Aurélie et je suis assistante sociale libérale, experte auprès des personnes âgées. Mes collègues et partenaires me décrivent comme une personne douce, souriante et empathique, mais redoutable lorsqu’il s’agit de défendre les intérêts et droits des personnes que j’accompagne. J’ai choisi ce métier par vocation. Je suis animée par l’envie de trouver des solutions aux problèmes que subissent les particuliers qui font appel à mes services.J’adore travailler sur le long terme et nouer une relation d’aide qui perdure dans le temps."
   
};
Profil.propTypes={
                    fullName:PropTypes.string.isRequired,
                  profession:PropTypes.string,
                         bio:PropTypes.string,
}

export default Profil;