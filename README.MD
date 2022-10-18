NAME UPDATE NULL ISSUE CAN'T FIXED;

bulk delete "delectCount" validation error
 if (!result.deletedCount) {
           await res.status(400).json({ status: "fail", error: "the product can't deleted " });
         }
