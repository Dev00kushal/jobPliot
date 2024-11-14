import { Briefcase, Calculator, Code, FlaskRoundIcon as Flask, Heart, Music, Pencil } from 'lucide-react';


const stats = [
    { number: "175,324", label: "Live Job" },
    { number: "97,354", label: "Companies" },
    { number: "38,471,54", label: "Candidates" },
    { number: "7,532", label: "New Jobs" },
  ]
  const Firstcategories = ["Designer", "Programming", "Digital Marketing", "Video", "Animation"]
  const popularVacancies = [
    { title: "Anesthesiologists", count: "14,234 Open Position" },
    { title: "Surgeons", count: "12,456 Open Position" },
    { title: "Obstetrics/Gynecologists", count: "13,567 Open Position" },
    { title: "Orthodontists", count: "10,234 Open Position" },
    { title: "Maxillofacial Surgeons", count: "11,234 Open Position" },
    { title: "Software Developer", count: "15,234 Open Position" },
    { title: "Psychiatrists", count: "12,345 Open Position" },
    { title: "Data Scientists", count: "13,456 Open Position" },
    { title: "Financial Manager", count: "11,567 Open Position" },
    { title: "Management Analysts", count: "10,678 Open Position" },
    { title: "IT Manager", count: "14,567 Open Position" },
    { title: "Operations Research Analysts", count: "12,789 Open Position" },
  ]

  const steps = [
    {
      title: "Create account",
      description: "Aliquam facilisi turpis ipsum sed, nec diam, tincidunt ut",
      icon: "1",
    },
    {
      title: "Upload CV/Resume",
      description: "Ut aliquam sit amet sapien ipsum, nec diam, tincidunt ut",
      icon: "2",
    },
    {
      title: "Find suitable job",
      description: "Praesent sed tellus sit amet tellus sed tellus sed tellus",
      icon: "3",
    },
    {
      title: "Apply job",
      description: "Praesent sit amet sapien ipsum, nec diam, tincidunt ut",
      icon: "4",
    },
  ]

  const Secondcategories = [
    { title: "Graphics & Design", count: "12k+ open position", icon: Pencil },
    { title: "Code & Programming", count: "8k+ open position", icon: Code },
    { title: "Digital Marketing", count: "15k+ open position", icon: Briefcase },
    { title: "Video & Animation", count: "4k+ open position", icon: Briefcase },
    { title: "Music & Audio", count: "3k+ open position", icon: Music },
    { title: "Account & Finance", count: "6k+ open position", icon: Calculator },
    { title: "Health & Care", count: "9k+ open position", icon: Heart },
    { title: "Data & Science", count: "10k+ open position", icon: Flask },
  ]



  export { Firstcategories, popularVacancies, Secondcategories, stats, steps };
