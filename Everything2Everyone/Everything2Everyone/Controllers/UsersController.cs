﻿using Microsoft.AspNetCore.Mvc;

namespace Everything2Everyone.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}