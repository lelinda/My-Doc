using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Backend.Controllers
{
  [Route("api/doctor")]
  public class DoctorsController : Controller
  {
    [HttpGet]
    public string Get()
    {
      WebClient client = new WebClient();

      string response = client.DownloadString("https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=41331&user_key=221f9015cc1b79992786e817265bdec9");

      return response;
    }
  }
}