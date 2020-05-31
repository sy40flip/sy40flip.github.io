
<cfmail to="sebastian@cityray.com" from="GoodCouples.net" subject="Guestbook" type="html">

1. Name <cfif isDefined('form.tname') and form.tname neq "">#form.tname#</cfif> <br>
2. Email <cfif isDefined('form.temail') and form.temail neq "">#form.temail#</cfif> <br>
3. Message <cfif isDefined('form.tmsg') and form.tmsg neq "">#form.tmsg#</cfif> <br>

</cfmail>

<cfoutput>
<H1>Thank you.</H1><BR><br>

1. Name <cfif isDefined('form.tname') and form.tname neq "">#form.tname#</cfif> <br>
2. Email <cfif isDefined('form.temail') and form.temail neq "">#form.temail#</cfif> <br>
3. Message <cfif isDefined('form.tmsg') and form.tmsg neq "">#form.tmsg#</cfif> <br>
</cfoutput>
