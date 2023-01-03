import { Grid, Typography, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import SingleBlog from "./SingleBlog";

const BlogDetail = ({ blogDetail }) => {
  const date = new Date(blogDetail.date_publish);
  const [blog, setBlog] = useState([]);
  useEffect((e) => {
    const func = async () => {
      const allBlogs = await axios
        .get("https://hdgraphic.ir/api/v1/blog/posts/list")
        .catch((err) => {
          console.log(err);
        });
      setBlog(allBlogs.data);
    };
    func();
  }, []);

  return (
    <>
      <Head>
        <title>{blogDetail.title}</title>
        <meta name="description" content={blogDetail.meta_description} />
        <meta name="keywords" content={blogDetail.meta_keywords} />
        <meta name="title" content={blogDetail.meta_title} />
      </Head>
      <Grid
        container
        sx={{
          mt: 7,
          px: {
            xs: 2,
            md: 10,
            lg: 18,
          },
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Grid
          xs={12}
          item
          sx={{
            mb: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
          <Box
            sx={{
              "&.MuiBox-root img": {
                width: {
                  xs: "300px",
                  sm: "330px",
                  md: "350px",
                  lg: "420px",
                },
              },
            }}
          >
            <img
              src={`https://hdgraphic.ir/${blogDetail.image}`}
              style={{ borderRadius: "10px" }}
            />
          </Box>
          <Typography
            component={"div"}
            sx={{
              fontSize: "14px",
              color: "#9A9A9A",
              lineHeight: "30px",
              p: 2,
              textAlign: "justify",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", my: 1 }}>
                <Box
                  style={{
                    padding: "0 9px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#FFDDB1",
                    color: "#B79200",
                    fontSize: "12px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  {blogDetail.category.title}
                </Box>
                <Box
                  style={{
                    padding: "0 9px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#EEEEEE",
                    color: "#232931",
                    fontSize: "12px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  حسین غفاری
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ mx: 1 }}>
                  <img src={"/images/mess.png"} style={{ verticalAlign: "sub" }} />
                </Box>
                <Box sx={{ color: "colors.black" }}>{blogDetail.views}</Box>
              </Box>
            </Box>
            {blogDetail.short_description}
          </Typography>
        </Grid>
        <Box dangerouslySetInnerHTML={{ __html: blogDetail.description }}></Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", width: "100%", my: 5, color: "#AFAFAF" }}
        >
          تاریخ انتشار : {date.toLocaleDateString("fa-IR")}
        </Box>
      </Grid>
      <Grid
        container
        sx={{
          px: {
            xs: 2,
            md: 10,
            lg: 22,
          },
          mt: 3,
        }}
      >
        <Grid item sx={{ display: "flex" }} xs={12} lg={7}>
          <Box>
            <img src="/images/6565.png" />
          </Box>
          <Box sx={{ pr: 3, alignSelf: "center" }}>
            <Typography sx={{ color: "colors.pink" }}>احمد مستوفی</Typography>
            <Typography sx={{ lineHeight: "25px", fontSize: "14px", textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                lg: "block",
              },
              mx: 2,
            }}
          >
            <img src="/images/line.png" />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            px: 3,
            fontSize: "14px",
            display: "flex",
            py: {
              xs: 4,
            },
          }}
        >
          <Box>نوشته های دیگر...</Box>
          <Link href="#">
            <img src="/images/an-1.png" style={{ padding: "0 10px" }} />
          </Link>
          <Link href="#">
            <img src="/images/an-2.png" style={{ padding: "0 10px" }} />
          </Link>
          <Link href="#">
            <img src="/images/an-3.png" style={{ padding: "0 10px" }} />
          </Link>
        </Grid>
      </Grid>
      <Box sx={{ mt: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            pr: {
              xs: 17,
            },
          }}
        >
          <Box sx={{ display: "flex", pb: 1 }}>
            <Box
              height={"22px"}
              sx={{
                height: "22px",
                backgroundColor: "colors.green",
                width: "8px",
              }}
            ></Box>
            {/* <></> */}
            <Typography sx={{ mx: 2 }}>تصاویر استوک</Typography>
            <Link href={"#"} style={{ color: "#4ECCA3", fontWeight: "bold" }}>
              مشاهده همه
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "30px",
            maxWidth: "1366px",
            flexWrap: "wrap",
          }}
        >
          {blog &&
            blog.map((blog, i) => {
              if (i >= 3) return;
              return (
                <Box sx={{ display: "flex" }}>
                  <SingleBlog blog={blog} />
                </Box>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default BlogDetail;

// <Grid item xs={12} sx={{ mt: 6 }}>
// <Typography component={"h5"} sx={{ fontWeight: "bold", my: 2 }}>
//   سادگی نامفهوم از صنعت
// </Typography>
// <Typography
//   sx={{
//     color: "#232931",
//     fontSize: "14px",
//     lineHeight: "30px",
//     mb: {
//       xs: 3,
//       md: 6,
//       lg: 12,
//     },
//     textAlign: "justify",
//   }}
// >
//   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
//   است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
//   فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
//   کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
//   طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
//   فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
//   موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
//   دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
//   گیرد.
// </Typography>
// <Box
//   sx={{
//     display: "flex",
//     justifyContent: "center",
//     mb: 6,
//     "&.MuiBox-root img": {
//       width: {
//         xs: "100%",
//         md: "80%",
//         lg: "70%",
//       },
//     },
//   }}
// >
//   <img src={"/images/back-g.png"} />
// </Box>
// <Typography
//   sx={{
//     color: "#232931",
//     fontSize: "14px",
//     lineHeight: "30px",
//     mb: 15,
//     textAlign: "justify",
//   }}
// >
//   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
//   است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
//   فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
//   کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
//   طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
//   فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
//   موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
//   دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
//   گیرد.
// </Typography>

// </Grid>
