﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ClassroomScheduler.ViewModels
{
    public class EventViewModel
    {
        [Required]
        [Display(Name = "Description")]
        public string Description { get; set; }

        [Required]
        [Display(Name = "Start time")]
        [DataType(DataType.Time)]
        public DateTime StartTime { get; set; }

        [Required]
        [Display(Name = "End time")]
        [DataType(DataType.Time)]
        public DateTime EndTime { get; set; }

        public bool Repeat { get; set; }

        public int? RepeatTimes { get; set; }

        [Required]
        public string EventType { get; set; }

        [Required]
        public string ClassRoom { get; set; }

        public string Course { get; set; }
    }
}