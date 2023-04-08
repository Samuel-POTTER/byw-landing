import Image from "next/image";
import React from "react";

const Descriptions = () => {
  return (
    <figure className="space-y-6">
      <div className="flex-col flex items-center">
        <div className="w-px h-[100px] bg-gradient-to-b from-black to-[#51c26f]" />
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-center text-black bg-gradient-to-r from-[#51c26f] to-[#f2e901]">
          <span>1</span>
        </div>
        <span className="font-bold text-[2rem] mt-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#51c26f] to-[#f2e901]">
          Sélectionnez
        </span>
        <div className="space-y-14 mt-12 text-center">
          <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Vos matchs en quelques clics
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 md:w-2/3 lg:w-1/2 text-xl">
              Nous vous mettons à disposition toutes les informations pour
              performer.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-20 md:mt-28">
          <Image
            src="/image1.png"
            alt="Byw Logo"
            className="px-4 md:px-0"
            width={600}
            height={300}
          />
          <div className="lg:px-16 md:mt-6 lg:mt-0 px-6 py-4 space-y-10">
            <div>
              <div className="font-semibold text-[22px] text-center lg:text-start md:text-2xl">
                Des statistiques détaillées
              </div>
              <p className="text-gray-400 text-center lg:text-start lg:w-2/3 font-normal">
                Analysez rapidement les performances et la forme des équipes
              </p>
            </div>
            <div>
              <div className="font-semibold md:text-2xl text-[22px] text-center lg:text-start">
                Un système de tri et de filtre
              </div>
              <p className="text-gray-400 text-center lg:text-start lg:w-2/3 font-normal">
                Analysez une centaine de matchs en quelques clics
              </p>
            </div>
            <div>
              <div className="font-semibold md:text-2xl text-[22px] text-center lg:text-start">
                Un pronostic avisé
              </div>
              <p className="text-gray-400 text-center lg:text-start lg:w-2/3 font-normal">
                Produit par une intelligence artificielle
              </p>
            </div>
            <div>
              <div className="font-semibold md:text-2xl text-[22px] text-center lg:text-start">
                Un indice de confiance
              </div>
              <p className="text-gray-400 text-center lg:text-start lg:w-2/3 font-normal">
                Issu d’un algorithme complexe, permets de sécuriser au mieux
                votre pari.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex items-center">
        <div className="w-px h-[100px] bg-gradient-to-b from-black to-[#7928CA]" />
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-center text-black bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
          <span>2</span>
        </div>
        <span className="font-bold text-[2rem] mt-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
          Pariez
        </span>
        <div className="space-y-14 mt-12 flex flex-col items-center text-center">
          <div className="font-bold text-3xl md:text-5xl lg:text-6xl text-center w-2/3">
            Maximiser vos chances de gain avec notre système de pari BetyouWin
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 lg:w-1/3 w-2/3 text-center text-xl">
              Ce dernier vous permettra de sélectionner plusieurs possibilités,
              de générer les combinaisons possibles, et enfin de miser de
              manière <span className="text-[#FF0080]">intelligente</span> pour{" "}
              <span className="text-[#FF0080]">minimiser</span> les{" "}
              <span className="text-[#FF0080]">risques</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col flex items-center">
        <div className="w-px h-[100px] bg-gradient-to-b from-black to-[#FF4D4D]" />
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-center text-black bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]">
          <span>3</span>
        </div>
        <span className="font-bold text-[2rem] mt-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]">
          Analysez
        </span>
        <div className="space-y-14 mt-12 flex flex-col items-center text-center">
          <div className="font-bold text-3xl md:text-5xl lg:text-6xl text-center w-2/3">
            Assurez un meilleur suivi de votre Bankroll
          </div>
          <p className="text-gray-400 lg:w-1/3 w-2/3 text-center text-xl">
            Tracez de manière quasi automatique tous vos paris afin de suivre
            l’évolution de votre bankroll et donc ainsi adapter votre stratégie.
          </p>
        </div>
      </div>
    </figure>
  );
};

export default Descriptions;
