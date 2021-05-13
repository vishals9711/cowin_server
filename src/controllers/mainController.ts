import axios from 'axios';
import { Request, Response } from 'express';

/**
 * GET /
 * filterCatalogs data.
 */
export const getSlots = async (
    req: Request | any,
    res: Response
): Promise<void> => {
    try {
        const { districtId, formattedDate }: { districtId: string, formattedDate: string } = req.query;
        const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict";
        const response = await axios.get(url, {
            params: {
                district_id: districtId,
                date: formattedDate,
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(403).json((error))
    }
};
