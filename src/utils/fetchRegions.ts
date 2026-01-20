export async function fetchRegionsReports(url:string){
    const regionReports = await fetch(url)
    return regionReports.json() 
}