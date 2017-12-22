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
    public string Get(string name, string specialty)
    {
      Console.WriteLine(name);
      WebClient client = new WebClient();

      string response = client.DownloadString("https://api.betterdoctor.com/2016-03-01/doctors?name=" + name + "&specialty_uid=" + specialty + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=efe95df06a0afcd63f78c2b81c58fb4c");

      Console.WriteLine("https://api.betterdoctor.com/2016-03-01/doctors?name=" + name + "&specialty_uid=" + y + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=efe95df06a0afcd63f78c2b81c58fb4c");


      return response;
    }
  }
}