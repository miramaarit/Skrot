buildmenu()

function buildmenu()
    {
        let links = [
            ["Startsidan", "index.html"],
            ["Produkter", "products.html"],
            ["Media", "media.html"],
            ["Kontaktformulär", "register.html"],
            ["Kontakta oss", "contactus.html"],
            ["Personal", "staff.html"]



        ]
    

    for(let i= 0; i < links.length; i++)
    {
        //<li><a href="">Länk</</li>
      let listItem = document.createElement("li")
      let link = document.createElement("a")
      link.href = links[i][1]
      let text = document.createTextNode(links[i][0])
      link.appendChild(text)
      listItem.appendChild(link)
      document.getElementById("menu").appendChild(listItem)
    }
}