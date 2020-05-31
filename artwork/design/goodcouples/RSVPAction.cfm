
<cfmail to="sebastian@cityray.com" from="GoodCouples.net" subject="R.S.V.P." type="html">

1, Groom <cfif isDefined('form.groom') and form.groom neq "">#form.groom#</cfif> <br>
2. Bride <cfif isDefined('form.bride') and form.bride neq "">#form.bride#</cfif> <br>
3. First name <cfif isDefined('form.tf_name') and form.tf_name neq "">#form.tf_name#</cfif> <br>
4. Last name <cfif isDefined('form.tl_name') and form.tl_name neq "">#form.tl_name#</cfif> <br>
5. Contact number <cfif isDefined('form.tnumber') and form.tnumber neq "">#form.tnumber#</cfif> <br>
6. Email <cfif isDefined('form.temail') and form.temail neq "">#form.temail#</cfif> <br>
7. Will attend ceremony <cfif isDefined('form.ceremony1') and form.ceremony1 neq "">#form.ceremony1#</cfif> <br>
8. Will not attend ceremony <cfif isDefined('form.ceremony2') and form.ceremony2 neq "">#form.ceremony2#</cfif> <br>
9. Will attend banquet <cfif isDefined('form.dinner1') and form.dinner1 neq "">#form.dinner1#</cfif> <br>
10. Will not attend banquet <cfif isDefined('form.dinner2') and form.dinner2 neq "">#form.dinner2#</cfif> <br>
11. Number of person incl. yourslef <cfif isDefined('form.tpersons') and form.tpersons neq "">#form.tpersons#</cfif> <br>

</cfmail>

<cfoutput>
<H1>Thank you.</H1><BR><br>

1, Groom <cfif isDefined('form.groom') and form.groom neq "">#form.groom#</cfif> <br>
2. Bride <cfif isDefined('form.bride') and form.bride neq "">#form.bride#</cfif> <br>
3. First name <cfif isDefined('form.tf_name') and form.tf_name neq "">#form.tf_name#</cfif> <br>
4. Last name <cfif isDefined('form.tl_name') and form.tl_name neq "">#form.tl_name#</cfif> <br>
5. Contact number <cfif isDefined('form.tnumber') and form.tnumber neq "">#form.tnumber#</cfif> <br>
6. Email <cfif isDefined('form.temail') and form.temail neq "">#form.temail#</cfif> <br>
7. Will attend ceremony <cfif isDefined('form.ceremony1') and form.ceremony1 neq "">#form.ceremony1#</cfif> <br>
8. Will not attend ceremony <cfif isDefined('form.ceremony2') and form.ceremony2 neq "">#form.ceremony2#</cfif> <br>
9. Will attend banquet <cfif isDefined('form.dinner1') and form.dinner1 neq "">#form.dinner1#</cfif> <br>
10. Will not attend banquet <cfif isDefined('form.dinner2') and form.dinner2 neq "">#form.dinner2#</cfif> <br>
11. Number of person incl. yourslef <cfif isDefined('form.tpersons') and form.tpersons neq "">#form.tpersons#</cfif> <br>

</cfoutput>

