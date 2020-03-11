using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAplicationTest.Models;

namespace WebAplicationTest.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Autherize(WebAplicationTest.Models.User userModel)
        {
            using (WebAplicationTestEntities db = new WebAplicationTestEntities())
            {
                var userDetails = db.Users.Where(x => x.username == userModel.username && x.password == userModel.password).FirstOrDefault();
                if(userDetails == null)
                {
                    userModel.LoginErrorMessage = "Wrong Username or Password";
                    return View("Index", userModel);
                }
                else
                {
                    Session["userid"] = userDetails.userid;
                }
            }
            return View();
        }
    }
}