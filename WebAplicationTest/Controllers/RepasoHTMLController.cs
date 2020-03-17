using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAplicationTest.Models;

namespace WebAplicationTest.Controllers
{
    public class RepasoHTMLController : Controller
    {
        public int Persona { get; private set; }

        // GET: RepasoHTML
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult TablaJS()
        {
            return View();
        }

        public JsonResult listarPersonas()
        {
            List<Persona> listaPersona = new List<Persona>
            {
                new Persona{idPersona=1,nombre="Arturo",apellidoPaterno="Romero"},
                new Persona{idPersona=2,nombre="Cuitlahuac",apellidoPaterno="Moreno"},
                new Persona{idPersona=3,nombre="Daniel",apellidoPaterno="Vargas"}
            };
            return Json(listaPersona,JsonRequestBehavior.AllowGet);
        }

    }
}