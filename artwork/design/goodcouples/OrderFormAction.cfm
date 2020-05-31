
<cfmail to="sebastian@cityray.com" from="GoodCouples.net" subject="Order Form" type="html">

1. Wedding Website <cfif isDefined('form.web') and form.web neq "">#form.web#</cfif> <br>
2. Wedding Package <cfif isDefined('form.pack') and form.pack neq "">#form.pack#</cfif> <br>
3. Bride's name <cfif isDefined('form.tbride') and form.tbride neq "">#form.tbride#</cfif> <br>
4. Groom's name <cfif isDefined('form.tgroom') and form.tgroom neq "">#form.tgroom#</cfif> <br>
5. Contact no. <cfif isDefined('form.tnumber') and form.tnumber neq "">#form.tnumber#</cfif> <br>
6. Email <cfif isDefined('form.temail') and form.temail neq "">#form.temail#</cfif> <br>
7. Address <cfif isDefined('form.tadd') and form.tadd neq "">#form.tadd#</cfif> <br>
8. Wedding Date <cfif isDefined('form.tdate') and form.tdate neq "">#form.tdate#</cfif> <br>
9. Website address 1st choice <cfif isDefined('form.t1web') and form.t1web neq "">#form.t1web#</cfif> <br>
10. Website addresss 2nd choice <cfif isDefined('form.t2web') and form.t2web neq "">#form.t2web#</cfif> <br>

</cfmail>

<cfoutput>
<H1>Thank you for your order.</H1><BR><br>

1. Wedding Website <cfif isDefined('form.web') and form.web neq "">#form.web#</cfif> <br>
2. Wedding Package <cfif isDefined('form.pack') and form.pack neq "">#form.pack#</cfif> <br>
3. Bride's name <cfif isDefined('form.tbride') and form.tbride neq "">#form.tbride#</cfif> <br>
4. Groom's name <cfif isDefined('form.tgroom') and form.tgroom neq "">#form.tgroom#</cfif> <br>
5. Contact no. <cfif isDefined('form.tnumber') and form.tnumber neq "">#form.tnumber#</cfif> <br>
6. Email <cfif isDefined('form.temail') and form.temail neq "">#form.temail#</cfif> <br>
7. Address <cfif isDefined('form.tadd') and form.tadd neq "">#form.tadd#</cfif> <br>
8. Wedding Date <cfif isDefined('form.tdate') and form.tdate neq "">#form.tdate#</cfif> <br>
9. Website address 1st choice <cfif isDefined('form.t1web') and form.t1web neq "">#form.t1web#</cfif> <br>
10. Website addresss 2nd choice <cfif isDefined('form.t2web') and form.t2web neq "">#form.t2web#</cfif> <br>

</cfoutput>