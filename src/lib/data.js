export const getAllCategories = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
  return data.data
}


export const getCategoriesWise = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    return data
}


export const getNews = async(_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${_id}`)
    const data = await res.json()
    return data
}