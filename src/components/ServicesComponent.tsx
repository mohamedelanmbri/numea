import React from 'react';
import { Shield, Server, Cpu, GraduationCap } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './footer';

const ServicesComponent = () => {
  const formatDescription = (description: string) => {
    return description.split('\n').map((line, i) => {
      if (line.trim().startsWith('-')) {
        return (
          <li key={i} className="ml-6 my-2 text-gray-300 flex items-start">
            <span className="w-1.5 h-1.5 mt-2.5 mr-3 bg-indigo-400 rounded-full flex-shrink-0" />
            <span>{line.trim().substring(1).trim()}</span>
          </li>
        );
      }
      return <p key={i} className="my-3 text-gray-300 leading-relaxed">{line.trim()}</p>;
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 mb-8 leading-tight">
              Nos Services
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Des solutions innovantes pour répondre à vos besoins en matière de sécurité et de transformation numérique
            </p>
          </div>

          <div className="space-y-32">
            {/* Conseils & Gouvernance */}
            <section>
              <div className="flex items-center gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-300 rounded-2xl p-4 text-white shadow-lg">
                  <Shield className="w-full h-full" />
                </div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                  Conseils & Gouvernance
                </h2>
              </div>

              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-8">Cybersécurité</h3>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-xl font-medium text-indigo-300 mb-6">Gouvernance</h4>
                      <div className="pl-6 border-l-2 border-indigo-100">
                        {formatDescription(`Nous accompagnons les organisations à la mise en place et au pilotage de leur gouvernance sécurité. Lors de nos missions d'assistance, nous réalisons tout ou partie des éléments suivants :
                        - Réalisation d'analyse de risque
                        - Rédaction des politiques et formalisation des procédures
                        - Élaboration du plan d'action sécurité
                        - Instauration des procédures et adaptation des process
                        - Mise en conformité
                        - Mise en place d'un plan de sensibilisation
                        - Suivi des projets de sécurité`)}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-indigo-300 mb-6">Diagnostic Cybersécurité</h4>
                      <div className="pl-6 border-l-2 border-indigo-100">
                        {formatDescription(`Notre diagnostic cybersécurité a pour but d'identifier les faiblesses des organisations en matière de sécurité numérique et de proposer un plan d'action permettant de renforcer le niveau de sécurité de l'organisation et ainsi de limiter les impacts d'une cyberattaque. Notre analyse s'articule autour des axes suivants :
                        - La gouvernance sécurité
                        - L'architecture technique et les mesures de sécurité en place
                        - La conformité réglementaire`)}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-indigo-300 mb-6">Management Sécurité de l'Information</h4>
                      <div className="pl-6 border-l-2 border-indigo-100">
                        {formatDescription(`Nous accompagnons les organisations à la mise en place d'un système de management de la sécurité de l'information (SMSI) conformément à la norme ISO27001. La mise en place d'un SMSI permettra de mettre en place une démarche sécurité efficiente et d'entrer dans un cycle d'amélioration continue. Notre démarche pour la mise en place du SMSI s'appuie sur les éléments suivants :
                        - Identification du contexte
                        - Analyse de l'existant
                        - Visite des sites
                        - Entretiens et collecte des preuves
                        - Formalisation des écarts à la norme et élaboration du plan d'action`)}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-8">Digitalisation des processus</h3>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-xl font-medium text-indigo-300 mb-6">Étude</h4>
                      <div className="pl-6 border-l-2 border-indigo-100">
                        {formatDescription(`- Cartographie et digitalisation des processus métier de l'organisation
                        - Alignement du SI à la stratégie métier (Schéma Directeur)
                        - Réalisation d'analyse de risque`)}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-indigo-300 mb-6">Assistance à la maîtrise d'ouvrage</h4>
                      <div className="pl-6 border-l-2 border-indigo-100">
                        {formatDescription(`Assistance pour le choix de la solution :
                        - Diagnostic de l'existant
                        - Rédaction du cahier des charges
                        - Choix de la solution

                        Assistance pour l'intégration de la solution :
                        - Conception
                        - Cadrage du projet
                        - Accompagnement à la réalisation jusqu'à l'exploitation`)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Intégration de Solutions */}
            <section>
              <div className="flex items-center gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-300 rounded-2xl p-4 text-white shadow-lg">
                  <Server className="w-full h-full" />
                </div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                  Intégration de Solutions
                </h2>
              </div>

              <div className="pl-6 border-l-2 border-indigo-100">
                {formatDescription(`Nous assurons la mise en place des solutions les plus adaptées et les plus innovantes pour nos clients. Dans ce périmètre, notre mission portera sur :
                - Identification des besoins
                - Conception et validation d'architecture
                - Intégration de solutions adaptées
                - Maintien en Conditions Opérationnelles
                - Assistance à l'exploitation`)}
              </div>
            </section>

            {/* Infogérance et assistance */}
            <section>
              <div className="flex items-center gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-300 rounded-2xl p-4 text-white shadow-lg">
                  <Cpu className="w-full h-full" />
                </div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  Infogérance et assistance
                </h2>
              </div>

              <div className="pl-6 border-l-2 border-indigo-100">
                {formatDescription(`Les DSI doivent imaginer et mettre en place des solutions informatiques afin de pouvoir répondre aux enjeux de leurs entreprises. Ces solutions doivent être opérées et maintenues par des experts. Nous assurons le maintien en condition opérationnelle et le support N2/N3 sur les différentes solutions techniques de nos clients. Notre intervention sur ce volet s'articule autour des axes suivants :
                - Audit du parc informatique
                - Gestion quotidienne du SI
                - Optimisation et analyse des performances
                - Suivi et conseil informatif`)}
              </div>
            </section>

            {/* Formation */}
            <section>
              <div className="flex items-center gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-300 rounded-2xl p-4 text-white shadow-lg">
                  <GraduationCap className="w-full h-full" />
                </div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                  Formation
                </h2>
              </div>

              <div className="pl-6 border-l-2 border-indigo-100">
                {formatDescription(`Dans le cadre de notre démarche d'accompagnement de nos clients, nous proposons des formations managériales et techniques spécifiques à leurs projets SI. Nous établissons des contenus spécifiques afin de les aider à maîtriser les différents aspects fonctionnels et techniques des solutions installées et de gouverner leurs systèmes d'information. Pour cette fin, nous disposons des compétences hautement qualifiées pour former leur personnel.

                NUMEA offre une variété de formations professionnelles :
                - Formation continue
                - Formation à la certification
                - Formation E-learning interactive

                Pour plus de détails sur les thèmes de formations proposées, merci de nous contacter sur l'adresse email suivante: contact@numea.ma`)}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesComponent;