using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Configuration;
using System.Net;
using testtravelfactory.Models;
using static System.Net.Mime.MediaTypeNames;

namespace testtravelfactory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TranslatorController : ControllerBase
    {
        List<TranslatorModel> translators = new List<TranslatorModel>()
        {
            new TranslatorModel
            {
                TranslatorId = 1,
                AppName = "App1",
                Selecte = false
            },
            new TranslatorModel
            {
                TranslatorId = 2,
                AppName = "App1",
                Selecte = false
            },
            new TranslatorModel
            {
                TranslatorId = 3,
                AppName = "App1",
                Selecte = false
            }
        };
        

        return Request.CreateResponse(HttpStatusCode.OK, translators, Configuration.Formatters.JsonFormatter);
    }
}
