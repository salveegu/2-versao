const express = require("express");
const router = express.Router();
// const playersModel = require("./PlayersModel");
const articlesModel = require("../articles/ArticlesModel");
const categoriesModel = require("../categories/CategoriesModel");

router.get("/player/profile", (req, res) => {
  // Dados do formulário do usuário
  let nome = req.query.nome;
  let estado = req.query.estado;
  let cidade = req.query.cidade;

  //Dados da 1º fatura de energia do usuário - sem conversão
  let nomeDistribuidora = req.query.nomeDistribuidora;

  let valorKwh = req.query.valorKwh;
  let quantidadeFaturada = req.query.quantidadeFaturada;
  let taxas = req.query.taxas;
  let total_apagar_fatura_1 = req.query.total_apagar_fatura_1;

  // Tratando a pontuação fatura 1
  let replace_valor_kwh_fatura_1 = valorKwh.replace(",",".");
  let replace_quantidade_fatura_1 = quantidadeFaturada.replace(",",".");
  let replace_taxas_fatura_1 = taxas.replace(",",".");

 
  // Calculo do consumo da 1º fatura de energia do usuário - com conversão para float
  let float_valor_kwh_fatura_1 = parseFloat(replace_valor_kwh_fatura_1);
  let float_quantidade_fatura_1 = parseFloat(replace_quantidade_fatura_1);
  let float_taxas_fatura_1 = parseFloat(replace_taxas_fatura_1);

  let gasto_total_kwh_fatura_1 = float_valor_kwh_fatura_1*float_quantidade_fatura_1+float_taxas_fatura_1;

  // console.log(float_valor_kwh_fatura_1,float_quantidade_fatura_1,float_taxas_fatura_1);


  // Dados da Lâmpada 1 do usuário
  let nome_lampada_1 = req.query.nomeLampada_1;
  let horas_lampada_1 = req.query.horasLampada_1;
  let potencia_lampada_1 = req.query.potenciaLampada_1;
  
  // Replace dos dados da lampada 1
  let replace_potencia_Lampada_1 = potencia_lampada_1.replace(",",".");

  // Caculo do consumo da lâmpada 1
  let int_horas_lampada_1 = parseInt(horas_lampada_1);
  let float_potencia_Lampada_1 = parseFloat(replace_potencia_Lampada_1);
  let consumo_usuario_Lampada_1 = int_horas_lampada_1 * float_potencia_Lampada_1;

  let potenciaTotalLampadaUsuario = potencia_lampada_1*int_horas_lampada_1;

  

  let finalPower = [];

  let result = [];

  articlesModel
    .findAll({ attributes: ['potencia']})
    .then((potencias) => {

      potencias.forEach((potencia) => {

        finalPower.push({ potencia: potencia.dataValues.potencia.replace(",", ".")  * int_horas_lampada_1 })
      })

      finalPower.forEach((item) => {
        if (item.potencia < potenciaTotalLampadaUsuario) {
          result.push({ potencia: item.potencia })
        }
      } )

      res.render("partials/adminViews/articlesViews/playerIndex", {
        articles: result,
      })


      
      // res.render("partials/adminViews/articlesViews/playerIndex", {
      //   articles: articles,
        // cidade,
        // nome,
        // estado,
        // quantidadeFaturada,
        // nomeDistribuidora,
        // taxas,
        // valorKwh
        
      // });
    });
});

router.post("/player/save", (req, res) => {
  var kwhmensal = req.body.kwhmensal;
  var nome = req.body.nome;
  var cidade = req.body.cidade;

  playersModel
    .create({
      kwhmensal: kwhmensal,
      nome: nome,
      cidade: cidade,
    })
    .then(() => {
      res.redirect("/player/profile");
    });
});

module.exports = router;
