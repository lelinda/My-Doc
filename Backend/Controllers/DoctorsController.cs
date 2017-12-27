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
    public string Get(string name, string specialty_uid, string location)
    {
      Console.WriteLine(name + " " + specialty_uid + " " + location);
      WebClient client = new WebClient();

      string response = client.DownloadString("https://api.betterdoctor.com/2016-03-01/doctors?name=" + name + "&query=" + specialty_uid + "&location=" + location + "%2C100&skip=0&limit=20&user_key=efe95df06a0afcd63f78c2b81c58fb4c");

      return response;
    }
  }
}